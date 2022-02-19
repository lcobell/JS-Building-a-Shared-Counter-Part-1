function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
    let countValue = 0;



    async function getStartCount() {

  
        let newCount = await fetch ('http://localhost:9001/counter')
        let countResponse = await newCount.json()
        // console.log(countResponse)
        return countResponse
        
    }

    getStartCount().then(function(resp) {
        console.log(resp.value)
        countValue = resp.value;
        countContainer.textContent = countValue;
    })
  

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }
    // function reset() {
    //     countValue = 0
    //     countContainer.textContent = countValue;
    // }
    // resetButton.addEventListener('click', reset);
    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()