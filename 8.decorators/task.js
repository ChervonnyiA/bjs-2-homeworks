//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    return (...args) => {
        const hash = md5(args);
        let hashInCache = cache.find((item) => item.hash === hash);
        if (hashInCache) {
            return "Из кэша: " + hashInCache.result;
        }

        if (cache.length === 5) {
            cache.shift();
        }

        const result = func(...args);
        cache.push({hash: hash, result: result});
        return "Вычисляем: " + result;
    }
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    let hasCalled = false;
    wrapper.count = 0;
    wrapper.allCount = 0;

    function doFunc(args) {
        func(args);
        hasCalled = true;
        wrapper.count++;
    }

    function wrapper(...args) {
        if (timeoutId) {
            console.log("Удалили текущий таймаут");
            clearTimeout(timeoutId);
        }
        
        if (!hasCalled) {
            doFunc();
        } 

        console.log("Создаем новый таймаут");
        timeoutId = setTimeout(() => {
            doFunc(args);
            console.log("Вызвали коллбек");
        }, delay);
        wrapper.allCount++;
    }

    return wrapper;
}
