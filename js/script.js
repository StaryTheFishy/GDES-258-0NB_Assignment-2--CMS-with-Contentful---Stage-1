console.log("hello world!");
var client = contentful.createClient({
    space: 'f7mp64jz9fcp',
    accessToken: 'UWiDchefAhl13tJ2Vh9UkgZeKVZaMmHgap4vtd6bp7U',
});

var content = document.getElementById('content');

client.getEntries({content_type: 'homePage',}).then(function (entries) {
    entries.items.forEach(function (entry) {

        var contentDiv = document.createElement('div');
        var name = document.createElement('h3');
        name.innerHTML = entry.fields.name;
        contentDiv.append(name);
        content.append(contentDiv);

        var description = document.createElement('p');
        description.innerHTML = entry.fields.description;
        contentDiv.append(description);
        content.append(contentDiv);

        console.log(entry.fields.mainImage.fields.file.url)
        var mainImage = document.createElement('img');
        mainImage.classList.add('main-image')
        if (entry.fields.mainImage){
            mainImage.src = entry.fields.mainImage.fields.file.url;
            contentDiv.append(mainImage);
        }
        
    });


});
