import React, { Component } from 'react';
import ajax from '../api/ajax';
import {Main} from '../styled/DuaDetail';

class MorningEvening extends Component{
    state = {
        loadingDua : true,
        duaDetail:[]
    }
    async componentWillMount(){
        const dua =  await ajax.fetchAllDuaForCategory(1)
        console.log(dua);
        this.setState({
            loadingDua: false,
            duaDetail : dua
        })
    }
    
    renderInitialView(){
        if(this.loadingDua){
            return <div><p>Loading.......</p></div>
        }
        else{
            return <Main duaDetail={this.state.duaDetail} />
        }
    }
    render(){
        return(
            <div> 
                {this.renderInitialView()}
            </div>
        );
    }
}

export default MorningEvening;