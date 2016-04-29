
//js修改ObjC的bug的补丁
defineClass('ViewController', {
	sendMsgToJS: function(sender) {
	  self.bridge().send(self.msgField().text());
	},
});
