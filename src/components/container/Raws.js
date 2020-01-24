import React, {Component, Fragment} from 'react';
import Raw from '../Raw/Raw';


class Raws extends Component{
    state = {
        inputValues:[
            {id: 1, valueInput: "0"},
            {id: 2, valueInput: "0"},
            {id: 3, valueInput: "0"},
            {id: 4, valueInput: "0"},
            {id: 5, valueInput: "0"},
            {id: 6, valueInput: "0"},
            {id: 7, valueInput: "0"},
            {id: 8, valueInput: "0"},
            {id: 9, valueInput: "0"}
        ],
        totalInputSumm: 0
    }

    chunkifyArray(arr, n){
        let res = [];

        while(arr.length){
            res.push(arr.splice(0, n))
        }

        return res;
    }

    nameChangedhandler = (event, id) => {
        const inputIndex = this.state.inputValues.findIndex(input => {
          return input.id === id;
        });
    
        const input = {
          ...this.state.inputValues[inputIndex]
        };      
         
    
        input.valueInput = event.target.value;
            
        const inputs = [...this.state.inputValues];
        inputs[inputIndex] = input;

           
        this.setState({
            inputValues: inputs,
            totalInputSumm: inputs.map(input => Number(input.valueInput)).reduce((a, b) => a+b, 0)
          });
        
      };

    renderThreeInRaw(){
        const inputsArr = [...this.state.inputValues];
        const _chunkedArr = this.chunkifyArray(inputsArr, 3);
        //console.log("Chunked array", _chunkedArr);

        const raw = _chunkedArr.map((item, index) => {
            return (
                <div key={index}>
                    {item.map(input => (
                        <Raw
                            key={input.id}
                            value={input.valueInput}
                            changed={event => this.nameChangedhandler(event, input.id)}
                        />
                    ))}
                </div>              
            )
        })
        return raw;      
    }


    render(){
        let total = this.state.totalInputSumm;
        
        return(
            <Fragment >
                {this.renderThreeInRaw()}
                <p style={{textDecoration: 'underline'}}>This is total input sum: {total}</p>
            </Fragment>
            
        )
    }
}

export default Raws;
