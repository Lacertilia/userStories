
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
            'elev.lära_mig.skolan.få_kunskap',
            'framtida_universitetsstudent.få_bra_betyg.skolan.ta_mig_in_på_min_önskade_universitetslinje',
            'programmerare.lära_mig_programmera.c.det_är_bra_att_kunna_flera_programmeringsspråk'
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
                this.role = this.role.replace(/ /g, '_');
                this.activity = this.activity.replace(/ /g, '_');
                this.context = this.activity.replace(/ /g, '_');
                this.cause = this.cause.replace(/ /g, '_');
                this.rows.push(this.role + '.' + this.activity + '.' + this.context + '.' + this.cause);
                this.role = '';
                this.activity = '';
                this.context = '';
                this.cause = '';
                this.rowsAdded += 1;
            }
        },
        printRow(row){
            var devidedRow = row.split('.');
            var rowRole = devidedRow[0];
            rowRole = rowRole.replace(/_/g, ' ');
            var rowActivity = devidedRow[1];
            rowActivity = rowActivity.replace(/_/g, ' ');
            var rowContext = devidedRow[2];
            rowContext = rowContext.replace(/_/g, ' ');
            var rowCause = devidedRow[3];
            rowCause = rowCause.replace(/_/g, ' ');
            return 'Som en ' + rowRole + ' vill jag ' + rowActivity + ' i ' + rowContext + ' för att ' + rowCause + '.';
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