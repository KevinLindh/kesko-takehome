export function dateChecker(comparison:string | null){
    if(!comparison){
        console.log(comparison)
        return false;
    } else {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const dateString = +`${year}${month}${day}`;
        console.log(Number(dateString) > Number(comparison.split("-").join("")))
        return Number(dateString) > Number(comparison.split("-").join(""));
    }
}