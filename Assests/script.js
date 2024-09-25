
window.onload = function(){
    Notification.requestPermission().then(perm => {
        if(perm === 'granted'){
            new Notification('Wao~', {
                body: 'Welcome to resources!',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3J5WcqjK7Csi7k-z0Gv8k59H-fdl5EgL-beJdsqKhy58mryDjnlyjztPMPvBRqj-jjQ&usqp=CAU',
                tag: 'welcome',
                renotify: true
            })
        }
    })
}
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
});

document.getElementById("canvas").onclick = function(){
    try{
        window.open("https://garlandisd.instructure.com/login/saml");
    } catch (err){
        console.log(err);
        alert(err);
    }
}

document.getElementById("skyward").onclick = function(){
    try{
        window.open("https://skyward10.iscorp.com/SkySTSgarlandtxstu/sso/Skyward/login/SSO");
    } catch (err){
        console.log(err);
        alert(err);
    }
}
