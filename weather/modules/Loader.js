export const loader = (isLoading) => {
    if(isLoading) {
        loaderData.style.display = "block";
    }else{
        loaderData.style.display = "none";
    }

}