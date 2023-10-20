// check if user is authenticated and 
export const IsAuth = () => {
    const token = localStorage.getItem("token");
    if (token !== null) {
        return true;
    }
    return false;
    }



