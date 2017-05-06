function Placeload$1852(containerEl$1853, options$1854) {
    this.fullHeight = 0;
    //container complete
    this.fullHeightSide = 0;
    //container right complete
    this.container = containerEl$1853;
    this.wasRight = false;
    // if you have already painted the right side
    this.widthRight = '';
    this.marginLeftOfSide = '';
    const /**
* @description Options of the container background to customize.
*/
    backOptions$1856 = {
        backgroundColor: '',
        animationDelay: 300,
        borderRadius: ''
    };
    for (const key$1858 in options$1854) {
        backOptions$1856[key$1858] = options$1854[key$1858];
    }
    const /**************** HELPERS **************/
    /**
	* @description Set a size of the Element
	* @param {String} - Width
	* @param {String} - Height
	*/
    size$1868 = function (width$1919, height$1920) {
        return el$1921 => {
            el$1921.style.width = width$1919;
            el$1921.style.height = height$1920;
            return el$1921;
        };
    };
    const addClass$1878 = function (classname$1922) {
        return el$1923 => {
            el$1923.className += ` ${classname$1922}`;
            return el$1923;
        };
    };
    const appendIn$1888 = el$1924 => x$1925 => el$1924.appendChild(x$1925);
    const removeUnit$1894 = st$1926 => st$1926.slice(0, st$1926.indexOf('px'));
    const removeUnitInt$1900 = st$1927 => parseInt(removeUnit$1894(st$1927));
    const /**
* @description Get obj width data and styling el
* @param {Object}
* @return {Function} Function waiting parameter with {Element} to stylize
*/
    position$1910 = function (obj$1928) {
        return el$1929 => {
            if (typeof obj$1928.top !== 'undefined')
                el$1929.style.top = obj$1928.top;
            if (typeof obj$1928.right !== 'undefined')
                el$1929.style.right = obj$1928.right;
            if (typeof obj$1928.bottom !== 'undefined')
                el$1929.style.bottom = obj$1928.bottom;
            if (typeof obj$1928.left !== 'undefined')
                el$1929.style.left = obj$1928.left;
            return el$1929;
        };
    };
    let /* Create the background animation */
    animateContentEl$1912 = '';
    if (typeof document.querySelector(`${this.container} .placeload-background`) !== 'undefined' && document.querySelector(`${this.container} .placeload-background`) === null) {
        animateContentEl$1912 = addClass$1878('placeload-background')(appendIn$1888(document.querySelector(this.container))(document.createElement('div')));
    } else {
        animateContentEl$1912 = document.querySelector(`${this.container} > .placeload-background`);
    }
    const animateContentX$1917 = animateContentEl$1912.offsetWidth;
    if (/******** Customize background ********/
        backOptions$1856.borderRadius !== '') {
        const containerBackground$1941 = document.querySelector(`${this.container} .placeload-background`);
        containerBackground$1941.style.borderRadius = backOptions$1856.borderRadius;
    }
    /**
	* @description Represents a pincel of the Placeload.
	* @param {Object} Paint's data
	*/
    this.draw = function (dataComponent$1942) {
        const dataDefault$1944 = {
            width: '',
            height: '',
            marginTop: '',
            marginLeft: '',
            marginBottom: '',
            right: false
        };
        for (const key$1946 in dataComponent$1942) {
            dataDefault$1944[key$1946] = dataComponent$1942[key$1946];
        }
        if (this.container === '') {
            throw new Error('You need to specific container name to draw...');
        }
        let marginTopValue$1949 = dataDefault$1944.marginTop.slice(0, dataDefault$1944.marginTop.indexOf('px'));
        marginTopValue$1949 = marginTopValue$1949 === '' ? 0 : parseInt(marginTopValue$1949);
        const topPositionElement$1951 = this.fullHeight + marginTopValue$1949;
        const sideInCenterSizeX$1954 = (animateContentX$1917 - removeUnitInt$1900(dataDefault$1944.width)) / 2;
        const sideSizeX$1957 = animateContentX$1917 - removeUnitInt$1900(dataDefault$1944.width);
        const widthElement$1959 = dataDefault$1944.center ? sideInCenterSizeX$1954 : 0;
        if (dataDefault$1944.right) {
            const fullHeightSideValue$1963 = dataDefault$1944.height !== '' ? removeUnitInt$1900(dataDefault$1944.height) : 0;
            this.sideRightElement.style.display = 'none';
            if (//div before, beacause is in bottom.
                //row right
                this.wasRight) {
                this.rowRightlement = position$1910({
                    top: `${removeUnitInt$1900(dataDefault$1944.height) + this.fullHeightSide * 2}px`,
                    left: this.widthRight
                })(size$1868('100%', this.marginLeftOfSide)(addClass$1878('placeload-masker')(appendIn$1888(animateContentEl$1912)(document.createElement('div')))));
                this.fullHeightSide += fullHeightSideValue$1963;
            } else {
                this.widthRight = `${removeUnitInt$1900(dataDefault$1944.width) + removeUnitInt$1900(dataDefault$1944.marginLeft)}px`;
                this.marginLeftOfSide = dataDefault$1944.marginLeft;
                this.paddingLeftlement = position$1910({
                    top: 0,
                    left: dataDefault$1944.width
                })(size$1868(dataDefault$1944.marginLeft, '100%')(addClass$1878('placeload-masker')(appendIn$1888(animateContentEl$1912)(document.createElement('div')))));
            }
            this.wasRight = true;
        } else {
            this.marginTopElement = position$1910({
                top: `${this.fullHeight}px`,
                left: 0
            })(size$1868('100%', dataDefault$1944.marginTop)(addClass$1878('placeload-masker')(appendIn$1888(animateContentEl$1912)(document.createElement('div')))));
            this.sideLeftElement = position$1910({
                top: `${topPositionElement$1951}px`,
                left: 0
            })(size$1868(`${widthElement$1959}px`, dataDefault$1944.height)(addClass$1878('placeload-masker')(appendIn$1888(animateContentEl$1912)(document.createElement('div')))));
            this.sideRightElement = position$1910({
                top: `${topPositionElement$1951}px`,
                right: 0
            })(size$1868(dataDefault$1944.center ? `${widthElement$1959}px` : `${sideSizeX$1957}px`, dataDefault$1944.height)(addClass$1878('placeload-masker')(appendIn$1888(animateContentEl$1912)(document.createElement('div')))));
            this.fullHeight += removeUnitInt$1900(dataDefault$1944.height) + marginTopValue$1949;
        }
        animateContentEl$1912.style.height = `${this.fullHeight}px`;
    };
}
if (// Export
    typeof window !== 'undefined' && window) {
    if (typeof module === 'object' && module.exports) {
        module.exports = Placeload$1852;
    } else {
        // Browser
        window.Placeload = Placeload$1852;
    }
}
