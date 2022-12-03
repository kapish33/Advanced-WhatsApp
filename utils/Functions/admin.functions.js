const generateNumbers = (msg) => {
  /**
   * @type WIll Send Message For Every Possible Number
   * @public Admins | Developer | Users
   */
  try {
    let str = msg.body;
    // let str = "!generate 8707559369 23";
    let arr = str.split(' ');
    let n = Number(arr[1]);
    let m = Number(arr[2]);
    if (n.toString().length < 12) {
      n = Number('91' + n);
    }

    let nums = `!setNumbers\n`;
    for (let i = 0; i < m; i++) {
      n = n + i;
      nums += n + '@c.us\n';
    }
    return nums;
  } catch (error) {
    return error;
  }
};

module.exports = {
  generateNumbers,
};
