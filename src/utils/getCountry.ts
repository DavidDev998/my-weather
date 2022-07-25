import countries from '../../country.json';

export default function getCountryByPrefix(prefix:string){
    const country = countries.find(item => item.sigla === prefix)
    return country?.nome_pais
}