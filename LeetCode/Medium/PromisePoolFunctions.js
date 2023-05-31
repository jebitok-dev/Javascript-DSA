async function promisePoolFn(functions, n) {
  return new Promise((resolve) => {
    let results = [];
    let executingCount = 0;
    let i = 0;

    const executeNext = async() => {
      if(i >= functions.length && executingCount === 0) {
        resolve(results);
        return;
      }

      while(executingCount < n && i < functions.length) {
        const currentFunc = functions[i];
        executingCount++;
        i++;

        currentFunc()
          .then((result) => {
            executingCount--;
            results.push(result);
            executeNext();
          })
          .catch((error) => {
            executingCount--;
            executeNext();
          })
      }
      }
      executeNext();
  })
}