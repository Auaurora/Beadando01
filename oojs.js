class Bankszamla {
    constructor(szamlaszam, tulaj, egyenleg = 0, storagekey=null) {
      this.szamlaszam = szamlaszam;
      this.tulaj = tulaj;
      this.storagekey=storagekey;
      this.egyenleg = this.loadBalance ?? egyenleg;
    }

    saveBalance()
    {
      if(this.storagekey)
      {
        localStorage.setItem(this.storagekey, this.egyenleg);
      }
    }

    loadBalance()
    {
      if(this.storagekey)
      {
        const val = localStorage.getItem(this.storagekey);
        return val !== null ? parseInt(val) : null;
      }
      return null;
    }
  
    deposit(osszeg) {
      if (osszeg > 0) {
        this.egyenleg += osszeg;
        this.saveBalance();
      }
    }
  
    withdraw(osszeg) {
      if (osszeg > 0 && osszeg <= this.egyenleg) {
        this.egyenleg -= osszeg;
        this.saveBalance();
      }
    }
    getBalance(spanid) {
      id="\""+spanid+"\"";
      document.getElementById(id).innerHTML=this.egyenleg;
    }
  } 
const account1 = new Bankszamla("123456", 'John Doe', 1000, acct1);
const account2 = new Bankszamla('789012', 'Jane Smith', 0, acct2);