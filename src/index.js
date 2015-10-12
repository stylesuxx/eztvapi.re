import rp from 'request-promise';

class EZTV {
  constructor(url = 'http://eztvapi.re/') {
    this.apiUrl = url;

    this.buildQuery = function(options) {
      var queryString = '';
      for(var index in options) {
        queryString += index + '=' + options[index] + '&'
      }

      return queryString;
    }
  }

  getPages() {
    var url = 'shows/';
    return rp({url: this.apiUrl + url, json:true});
  }

  getShows(page, options = {}) {
    var query = this.buildQuery(options);
    var url = 'shows/' + page + '?' + query;
    return rp({url: this.apiUrl + url, json:true});
  }

  getDetails(id) {
    var url = 'show/' + id;
    return rp({url: this.apiUrl + url, json:true});
  }
}

export default EZTV;
