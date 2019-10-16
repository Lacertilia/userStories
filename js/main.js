
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
        loadFromUrl(){
            var urlString = window.location.search.substr(1);
            if(urlString !== ''){
                var devidedString = urlString.split(',');
                this.rows = [];
                for(i in devidedString){
                    devidedString[i] = devidedString[i].replace(/_/g, ' ');
                    devidedString[i] = devidedString[i].replace(/%C3%A5/g, 'å');
                    devidedString[i] = devidedString[i].replace(/%C3%85/g, 'Å');
                    devidedString[i] = devidedString[i].replace(/%C3%A4/g, 'ä');
                    devidedString[i] = devidedString[i].replace(/%C3%84/g, 'Ä');
                    devidedString[i] = devidedString[i].replace(/%C3%B6/g, 'ö');
                    devidedString[i] = devidedString[i].replace(/%C3%96/g, 'Ö');
                    
                    this.rows.push(devidedString[i]);
                    
                    
                }
                this.rowHead = 'Personen skrev';
            }
        },
        addToUrl(){
            this.href = 'index.html?' + this.rows;
            this.href = this.href.replace(/ /g, '_');
            alert('Kopiera länken som du kommer till efter denna alert.');
            window.location.href = this.href;
        }
    }
});