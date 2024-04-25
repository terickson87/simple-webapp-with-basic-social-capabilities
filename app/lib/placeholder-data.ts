import { User, UserId } from "./definitions";

const users: User[] = [0,1,2,3,4].map((x: number) => (
  {
    id: {userId: x},
    name: `User${x}`,
    email: `User${x}@App.com`,
    password: `User${x}Pass`,
    friendIds: new Set(),
    postIds: new Set(),
  }
));

function generateRandomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addFriend(thisUser: User, idNum: number) {
  const iUserId: UserId = { userId: idNum }
  thisUser.friendIds.add(iUserId)
  users.find((x) => x.id.userId == iUserId.userId)?.friendIds.add(thisUser.id)
}

users.forEach( (thisUser) => {
  for (let i = 0; i < 2; i++) {
    const idNum = generateRandomInteger(0, users.length - 1);
    addFriend(thisUser, idNum);
  }
});