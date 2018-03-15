const apiHost   = 'http://tychbees.com/'

export default {
    async fetchAllCategories(){
        try {
            const response = await fetch('http://localhost:8888/duaAppBackEnd/categories');
            const responseJson = await response.json();
            console.log(responseJson);
            return responseJson;
        }catch(error){
            console.error(error);
        }
    },
    async fetchAllDuaForCategory(id){
        try {
            const response = await fetch('http://localhost:8888/duaAppBackEnd/duafor/' + id);
            const responseJson = await response.json();
            return responseJson;
        }catch(error){
            console.error(error);
        }
    }
}