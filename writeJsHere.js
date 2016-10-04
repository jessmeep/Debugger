//All your code goes here
var myBank = function (password){
var myAccount = {
balance : 5,
password: 1234
};
if (myAccount.password === password){
	return myAccount.balance;
} else {
	return 'Try Again';
}

};

console.log (myBank (1234));

console.log (myBank (1264));