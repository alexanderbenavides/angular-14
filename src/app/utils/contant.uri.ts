const apiKey = '6a75b47606f6d0fc8a642594ef48c73e';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
export class ConstantUri {
    public static readonly tokenNew = tmdbBaseUrl + '/authentication/token/new'; 
    public static readonly validateWithToken = tmdbBaseUrl + '/authentication/token/validate_with_login';
    public static readonly apiKey = apiKey;
    public static readonly movieGenres = tmdbBaseUrl + '/movie/popular';
    public static readonly movie = tmdbBaseUrl + '/movie';
    public static readonly imgBaseUrl = 'https://image.tmdb.org/t/p/original/';
}