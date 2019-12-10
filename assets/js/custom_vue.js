// API details and URL
const apiKey = "e0620bd4";
const baseUrl = "http://www.omdbapi.com/?";

// Function to make the url
function makeUrl (){
  return baseUrl + "apikey=" + apiKey + "&t=harry+potter"
}

// Fetching Data from API
const dataM = new Vue({
  el: '#moviePoster',
  data : {
        iurl: null,
        seen: true,
        moviePoster: [],
        moviePlot: [],
        movieTitle: [],
        movieData: {
           mtitle: '',
            mPlot: '',
            mPoster: '', 

        }
  },
  mounted () {
   this.get_movie()
  },
  methods: {
    get_movie() {
      let url = makeUrl();
      axios.get(url).then((response) =>
       {
        (this.moviePoster = response.data.Poster);
        (this.moviePlot = response.data.Plot);
        (this.movieTitle = response.data.Title);
      }).catch( error => {console.log(error); })
    },
    
    
  },
})



const dataS = new Vue({
  el: '#addMovieDetails',
  
  data(){
    return {
      movieData: {
        mtitle:'',
        mPlot:'',
      },
      isSubmitted: false,
      iurl:null,
      seen:true,
    }
  },
    methods: {
      show_detail(){
      this.isSubmitted = true;
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.iurl = URL.createObjectURL(file);
    },
  },
})

