const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'Female',
        lookingfor: 'Male',
        location: 'Miami Fl',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'William Johnson',
        age: 38,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Lynn MA',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
];

let profiles = profileIterator(data);
nextProfile();

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile(){
    let current = profiles.next();
    
    if(current.done === true){
        profiles = profileIterator(data);
        current = profiles.next();
    }    

    let currentProfile = current.value; 

    if(currentProfile){
        document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
                <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
            </ul>
        `;
        document.getElementById('imageDisplay').innerHTML = `
            <img src="${currentProfile.image}">
        `;
    }

}

// Profile Iterator
function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next: function(){
            return (nextIndex < profiles.length) ? {value: profiles[nextIndex++], done: false} : { done: true };
        }
    };
}

