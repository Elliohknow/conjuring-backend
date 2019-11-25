const users = [];

const addUser = ({ id, name, room }) => {
  console.log("addUser() fired");
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  
  if(!name || !room) {
    return { error: 'Your username and room are required.' };
  }

  const existingUser = users.find(user => {
		return user.room === room && user.name === name;
	});

  if(existingUser) {
    return { error: 'Username is taken.' };
  }

  const user = { id, name, room };

  users.push(user);

  return { user };
}


const removeUser = id => {
	console.log("removeUser() fired");
	const index = users.findIndex(user => user.id === id);
	if (index !== -1) {
		return users.splice(index, 1)[0];
	}
};

const getUser = id => {
	console.log("getUser() fired");
	return users.find(user => user.id === id);
};

const getUsersInRoom = room => {
	console.log("getUsersInRoom() fired");
	room = room.trim().toLowerCase();
	return users.filter(user => user.room === room);
};
module.exports = { addUser, removeUser, getUser, getUsersInRoom };