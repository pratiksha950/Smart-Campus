import toast from "react-hot-toast";
const setPageTitle=(title)=>{
    document.title=title;
};

const isUserLoggedIn=()=>{
        const userJwtToken=localStorage.getItem("userJwtToken");
        return !!userJwtToken;
}

const getUserJwtToken=()=>{
    const userJwtToken=localStorage.getItem("userJwtToken")
    return userJwtToken;
}

const getUserData=()=>{
    const userData=localStorage.getItem("userData")||"{}";
    return JSON.parse(userData);
}

const logOutUser=()=>{
    localStorage.clear();
    toast.success("Logged out succeefully")
    setTimeout(()=>{
        window.location.href="/login"
    },500)
}

export {isUserLoggedIn,setPageTitle,getUserJwtToken,getUserData,logOutUser};