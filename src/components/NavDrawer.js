import React, {Component} from 'react';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import {Link} from 'react-router';
import {NavToggleButton} from './../styled/NavDrawer';
import ajax from '../api/ajax';
function Category(props){
    return(
              <Link to={props.category.url}>
                     <MenuItem
                      onTouchTap={props.toggle}
                      primaryText={props.category.name}
                      />
              </Link>);
}
class NavDrawer extends Component{
    state={
        open:true,
        width: 250,
        categories: [],
        loadingCategories: true,
    }
    toggle = () => {
        this.setState((prevState, props) =>{
            return {
                open: !prevState.open
            }
        })
    }
    async componentWillMount(){
        const cat =  await ajax.fetchAllCategories().then()
        console.log(cat);
        this.setState({
            ...this.state,
            categories: cat,
            loadingCategories: false
        });  
    }
    
    categoryLoading(){
        return (this.state.loadingCategories) ?
            <div><p>Loading.....</p></div>
            : 
            [
                Object.keys(this.state.categories).map((key) => {
                    return <Category 
                                key={key} 
                                category={this.state.categories[key]} 
                                toggle={this.toggle}/>
                })]
        }
   
    render(){
        return(
            <div>
                <NavToggleButton
                    toggle={this.toggle}
                    width={this.state.width}
                    open={this.state.open}
                    />
                <Drawer
                    width={this.state.width}
                    open={this.state.open}
                    openSecondary={true}>

                    {this.categoryLoading()}
                       
                        <Link to={'/credit'}>
                        <MenuItem
                            onTouchTap={this.toggle}
                            primaryText={'Credit'}
                        />
                         </Link> 

                    </Drawer>
            </div>
        );
    }
}

export default NavDrawer;