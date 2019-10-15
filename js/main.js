
new Vue({
    el: '#root',
    data: {
        rowHead: 'Exempel på vad man kan skriva',
        role: '',
        activity: '',
        context: '',
        cause: '',
        rowsAdded: 0,
        rows: [
            'Som en elev vill jag lära mig i skolan för att få kunskap.',
            'Som en framtida universitetsstudent vill jag få bra betyg i skolan för att ta mig in på min önskade universitetslinje.',
            'Som en programmerare vill jag lära mig programmera i c för att det är bra att kunna flera programmeringsspråk.'
        ],
        href: ''
    },

    methods: {
        addRow(){
            if(this.role == '' || this.activity == '' || this.context == '' || this.cause == ''){
                alert('Vänligen skriv in i alla fält'); 
            }else{
                if(this.rowsAdded == 0){
                    this.rowHead = 'Skrivna rader';
                    this.rows = [];
                }
                this.rows.push('Som en ' + this.role + ' vill jag ' + this.activity + ' i ' + this.context + ' för att ' + this.cause + '.');
                this.role = '';
                this.activity = '';
                this.context = '';
                this.cause = '';
                this.rowsAdded += 1;
            }
        },
        loadFromGet(){
            var urlString = window.location.search.substr(1);
            if(urlString !== ''){
                var devidedString = urlString.split(',');
                this.rows = [];
                for(string in devidedString){
                    devidedString[string] = devidedString[string].replace(/_/g, ' ');
                    devidedString[string] = devidedString[string].replace(/%C3%A5/g, 'å');
                    devidedString[string] = devidedString[string].replace(/%C3%85/g, 'Å');
                    devidedString[string] = devidedString[string].replace(/%C3%A4/g, 'ä');
                    devidedString[string] = devidedString[string].replace(/%C3%84/g, 'Ä');
                    devidedString[string] = devidedString[string].replace(/%C3%B6/g, 'ö');
                    devidedString[string] = devidedString[string].replace(/%C3%96/g, 'Ö');
                    
                    this.rows.push(devidedString[string]);
                    this.rowHead = 'Personen skrev';
                    
                }
            }
        },
        addToGet(){
            this.href = 'index.html?' + this.rows;
            this.href = this.href.replace(/ /g, '_');
            window.location.href = '' + this.href;
        }
    },

    computed: {

    }
})