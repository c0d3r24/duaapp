import React from 'react';
import {Main} from './../styled/DuaDetail';

export const renderInitialView = (loadingDua, duaDetail) => {
    if(loadingDua){
        return <div><p>Loading.......</p></div>
    }
    else{
        return <Main duaDetail={duaDetail} />
    }
}
