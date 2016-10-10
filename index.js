
/* --------------------------------- Module Exports  --------------------------------- */

module.exports = GetExplicitType;


/* --------------------------------- GetExplicitType --------------------------------- */

/**
 * Returns obj constructor name
 * @param (Mixed) obj
 * @return (String) [ Array, Arguments, Object, Function, RegExp, ... ]
 */
function GetExplicitType( obj ) {
    var dataType = toClass.call( obj );
    dataType = dataType.split( ' ' )[ 1 ];
    dataType = dataType.substring( 0, dataType.length - 1 );

    return dataType;
}


/* --------------------------------- Helpers --------------------------------- */

const toClass = Object.prototype.toString;
