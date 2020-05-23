var moment = require('moment');
module.exports = {
  book: {
    assets: './assets',
    css: [
      'footer.css'
    ],
  },
  hooks: {
    'page:before': function(page) {
      var _label = 'File Modify: ',
          _format = 'YYYY-MM-DD HH:mm:ss',
          _copy = ''
      if(this.options.pluginsConfig['tbfed-pagefooter-v']) {
        _label = this.options.pluginsConfig['tbfed-pagefooter-v']['modify_label'] || _label;
        _format = this.options.pluginsConfig['tbfed-pagefooter-v']['modify_format'] || _format;

        var _c = this.options.pluginsConfig['tbfed-pagefooter-v']['copyright'];
        _copy = _c ? _c + ' all right reserved' + _copy : _copy;
      }
      var _copy = '<span class="copyright">'+_copy+'</span>'
      var str = ' \n\n<footer class="page-footer">' + _copy +
          '<span class="footer-modification">' +
          _label +
          '\n{{file.mtime | date("' + _format +
          '")}}\n</span></footer>'
      page.content = page.content + str;
      return page;
    }
  },
  filters: {
    date: function(d, format) {
      return moment(d).format(format)
    }
  }
};
