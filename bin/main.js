#! /usr/bin/env node

var spawn = require( 'child_process' ).spawn,
	fs = require( 'fs' ),
	forever = require( 'forever' );

/* jshint multistr:true */

var startPoint = 1;
if ( process.argv.indexOf( 'node' ) === 0 ){

	/* start at 3 */
	startPoint = 3;

} else if ( process.argv.indexOf( 'bgt' ) === 0  ){

	/* start at 2 */
	startPoint = 2;
}

var filename = process.argv[ startPoint-1 ];
if ( startPoint >= process.argv.length  || filename === undefined ){

	console.log( 'invalid arguments, must have at least a file name and a command such as "bgt default.js ls"' );
	process.exit();
}

if ( filename.indexOf('.js') < 0 ){

	console.log( 'invalid filename: ' + filename );
	process.exit();
}

console.log( 'the startPoint should be ', startPoint );

var fileData = 'var spawn = require( \'child_process\' ).spawn;\n';

fileData += 'var proc = spawn( \'' + process.argv[startPoint] + '\'';

if ( process.argv[startPoint+1] !== process.argv[ process.argv.length ] ){

	fileData += ',[';
	for ( var i = startPoint+1 ; i < process.argv.length; i++ ){

		console.log( 'command args', process.argv[i] );
		fileData += '\'' + process.argv[i] + '\'';
		if ( i < process.argv.length-1 )
			fileData += ',';
	}
	fileData += ']';
}

fileData += ');\n\
proc.stdout.on( \'data\', function( data ){\n\
	console.log( data.toString() );\n\
} );\n\
proc.stderr.on( \'data\', function( data ){\n\
	console.error( data.toString() );\n\
} );\n\
proc.on( \'exit\', function( ){\n\
	console.log( \'program exited\' );\n\
} );\n';

fs.writeFile( filename, fileData, function(err){

	if(err) console.error( err );
} );


