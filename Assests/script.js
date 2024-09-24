window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
});

document.getElementById("skyward").onclick = function(){
    try{
        window.open("https://skyward10.iscorp.com/SkySTSgarlandtxstu/sso/Skyward/login/SSO", type="_blank");
    } catch (err){
        console.log(err);
        alert(err);
    }
}

document.getElementById("canvas").onclick = function(){
    try{
        window.open("https://garlandisd.instructure.com/login/saml");
    } catch (err){
        console.log(err);
        alert(err);
    }
}
