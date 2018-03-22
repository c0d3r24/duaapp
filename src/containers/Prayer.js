import React, { Component } from 'react';
import ajax from './../api/ajax';
import {renderInitialView} from './../utils/helper';

class Prayer extends Component{
 
    state = {
        loadingDua : true,
        duaDetail:[]
    }
    async componentWillMount(){
        const dua =  await ajax.fetchAllDuaForCategory(1)
        this.setState({
            loadingDua: false,
            duaDetail : dua
        });
    }
    

    render(){
        return(
            <div> 
                {renderInitialView(this.loadingDua,this.state.duaDetail)}
            </div>
        );
    }
}

export default Prayer;