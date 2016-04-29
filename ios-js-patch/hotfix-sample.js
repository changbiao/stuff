

defineClass('ViewController', {
	 sendMsgToJS: function(sender) {
	 _bridge.send(self.msgField().text());
	},
});
