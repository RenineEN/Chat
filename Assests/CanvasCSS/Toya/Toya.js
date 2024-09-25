javascript:
var s = document.createElement('link');
s.rel = 'stylesheet;
s.href = `https://rawcdn.githack.com/RenineEN/School_Resources/fbabcdb12f1e412e2bddc9b0ea766c1c6959fbc6/Assests/CanvasCSS/Toya/Toya.css`;
document.head.appendChild(s);

(function(){
    Notification.requestPermission().then(perm => {
        if(perm === 'granted'){
            new Notification('Wao~', {
                body: 'Successfully Applied CSS!',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3J5WcqjK7Csi7k-z0Gv8k59H-fdl5EgL-beJdsqKhy58mryDjnlyjztPMPvBRqj-jjQ&usqp=CAU',
                tag: 'applied css',
                renotify: true
            })
        }
    })
})()
