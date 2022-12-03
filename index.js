const {
  Client,
  Location,
  List,
  Buttons,
  LocalAuth,
} = require('whatsapp-web.js');
const admins = require('./admins/admin');
const { sendCommonTextMessage } = require('./utils/Functions/common.functions');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: { headless: false },
});

client.initialize();

client.on('loading_screen', (percent, message) => {
  console.log('LOADING SCREEN', percent, message);
});

client.on('qr', (qr) => {
  // NOTE: This event will not be fired if a session is specified.
  console.log('QR RECEIVED', qr);
});

client.on('authenticated', () => {
  console.log('AUTHENTICATED');
});

client.on('auth_failure', (msg) => {
  // Fired if session restore was unsuccessful
  console.error('AUTHENTICATION FAILURE', msg);
});

client.on('ready', () => {
  console.log('READY');
});

client.on('message', async (msg) => {
  console.log('MESSAGE RECEIVED', msg);

  if (admins.includes(msg.from) && !msg.isGroup) {
    console.log('ADMIN');
    /**
     * @type if message is not form any group
     * @private
     * @can be used by Admins only
     */
    if (msg.body.toLocaleLowerCase()) {
      client.sendMessage(...sendCommonTextMessage(msg.from, msg.body));
    }
  } else if (msg.isGroup) {
    /**
     * @type if message is from a group
     * @Group Can Have THis Access Only
     * @can be used by Group Members Only
     */
  } else {
    // if message is form a normal user in personal mode
    /**
     * @type if message is not form any group
     * @private
     * @can be used by Admins only
     */
  }
});

client.on('message_create', (msg) => {
  // Fired on all message creations, including your own
  if (msg.fromMe) {
    // do stuff here
  }
});

client.on('message_revoke_everyone', async (after, before) => {
  // Fired whenever a message is deleted by anyone (including you)
  console.log(after); // message after it was deleted.
  if (before) {
    console.log(before); // message before it was deleted.
  }
});

client.on('message_revoke_me', async (msg) => {
  // Fired whenever a message is only deleted in your own view.
  console.log(msg.body); // message before it was deleted.
});

client.on('message_ack', (msg, ack) => {
  /*
        == ACK VALUES ==
        ACK_ERROR: -1
        ACK_PENDING: 0
        ACK_SERVER: 1
        ACK_DEVICE: 2
        ACK_READ: 3
        ACK_PLAYED: 4
    */

  if (ack == 3) {
    // The message was read
  }
});

client.on('group_join', (notification) => {
  // User has joined or been added to the group.
  console.log('join', notification);
  notification.reply('User joined.');
});

client.on('group_leave', (notification) => {
  // User has left or been kicked from the group.
  console.log('leave', notification);
  notification.reply('User left.');
});

client.on('group_update', (notification) => {
  // Group picture, subject or description has been updated.
  console.log('update', notification);
});

client.on('change_state', (state) => {
  console.log('CHANGE STATE', state);
});

client.on('disconnected', (reason) => {
  console.log('Client was logged out', reason);
});
