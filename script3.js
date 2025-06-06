const banksData = [
    {
        id: 1,
        name: 'State Bank of India',
        image: 'img/State Bank of India.jpeg',
        interest: '3.00% - 7.10% (FD)',
        branches: '22,405+',
        atms: '65,627+',
        netProfit: '₹61,077 Cr (FY24)',
        car: '14.28%',
        grossNPA: '2.24%',
        digitalAdoption: '97.8%',
        app: 'YONO SBI',
        rating: 'CRISIL AAA / Stable'
    }
    ,
    {
        "id": 2,
        "name": "Bank of Baroda",
        "image": "img/Bank Of Baroda.png",
        "interest": "4.00% - 7.10% (FD)",
        "branches": "8,425+",
        "atms": "11,046+",
        "netProfit": "₹17,789 Cr (FY24)",
        "car": "16.31%",
        "grossNPA": "2.92%",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "bob World",
        "rating": "CRISIL AAA / Stable"
    }
    ,
    {
        "id": 3,
        "name": "Bank of India",
        "image": "img/Bank of India.jpg",
        "interest": "4.00% - 8.10% (FD)",
        "branches": "5,084+",
        "atms": "7,500+",
        "netProfit": "₹6,318 Cr (FY24)",
        "car": "16.96%",
        "grossNPA": "4.98%",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "BOI Mobile",
        "rating": "CRISIL AA / Stable"
    }
    ,
    {
        "id": 4,
        "name": "Canara Bank",
        "image": "img/Canara Bank.png",
        "interest": "4.50% - 7.10% (FD)",
        "branches": "9,849+",
        "atms": "11,144+",
        "netProfit": "₹5,004 Cr (Q4 FY25)",
        "car": "16.57%",
        "grossNPA": "2.94%",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "Canara ai1",
        "rating": "CRISIL AAA / Stable"
    }
    ,
    {
        "id": 5,
        "name": "Punjab National Bank",
        "image": "img/Punjab national bank.jpeg",
        "interest": "3.50% - 8.25% (FD)",
        "branches": "10,189+",
        "atms": "11,822+",
        "netProfit": "₹4,567 Cr (Q4 FY25)",
        "car": "16.36%",
        "grossNPA": "3.95%",
        "digitalAdoption": "91%",
        "app": "PNB ONE",
        "rating": "CRISIL AAA / Stable"
    }
    ,
    {
        "id": 6,
        "name": "HDFC Bank",
        "image": "img/HDFC BANK.jpeg",
        "interest": "3.00% - 7.10% (FD)",
        "branches": "9,455+",
        "atms": "21,139+",
        "netProfit": "₹17,616 Cr (Q4 FY25)",
        "car": "18.8%",
        "grossNPA": "1.33%",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "HDFC Bank MobileBanking App",
        "rating": "CRISIL AAA / Stable"
    }
    , {
        "id": 7,
        "name": "ICICI Bank",
        "image": "img/ICICI Bank.jpeg",
        "interest": "3.00% - 7.35% (FD)",
        "branches": "6,983+",
        "atms": "16,285+",
        "netProfit": "₹12,630 Cr (Q4 FY25)",
        "car": "Data not publicly disclosed",
        "grossNPA": "1.67%",
        "digitalAdoption": "75%",
        "app": "iMobile Pay",
        "rating": "CRISIL AAA / Stable"
    },
    {
        "id": 8,
        "name": "Kotak Mahindra Bank",
        "image": "img/Kotak Mahindra Bank.png",
        "interest": "2.75% - 8.25% (FD)",
        "branches": "2,069+",
        "atms": "3,239+",
        "netProfit": "₹3,552 Cr (Q4 FY25)",
        "car": "22.2%",
        "grossNPA": "1.42%",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "Kotak Mobile Banking App",
        "rating": "CRISIL AAA / Stable"
    },
    {
        "id": 9,
        "name": "Yes Bank",
        "image": "img/YES Bank.jpeg",
        "interest": "3.25% - 7.50% (FD)",
        "branches": "1,200+",
        "atms": "1,800+",
        "netProfit": "₹738 Cr (Q4 FY25)",
        "car": "Data not publicly disclosed",
        "grossNPA": "1.6%",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "IRIS by YES BANK",
        "rating": "CRISIL A / Positive"
    },
    {
        "id": 10,
        "name": "Federal Bank",
        "image": "img/Federal Bank.png",
        "interest": "3.00% - 7.50% (FD)",
        "branches": "1,400+",
        "atms": "1,800+",
        "netProfit": "₹1,030 Cr (Q4 FY25)",
        "car": "16.40%",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "FedMobile",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 11,
        "name": "IDFC FIRST Bank",
        "image": "img/IDFC First Bank.jpeg",
        "interest": "3.00% - 7.25% (FD)",
        "branches": "800+",
        "atms": "Data not publicly disclosed",
        "netProfit": "₹304 Cr (Q4 FY25)",
        "car": "15.48%",
        "grossNPA": "1.40%",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "IDFC FIRST Bank Mobile Banking",
        "rating": "CARE AA+ / Stable"
    },
    {
        "id": 12,
        "name": "Bandhan Bank",
        "image": "img/Bandhan Bank.png",
        "interest": "3.00% - 7.85% (FD)",
        "branches": "5,646+",
        "atms": "Data not publicly disclosed",
        "netProfit": "₹318 Cr (Q4 FY25)",
        "car": "18.7%",
        "grossNPA": "4.23%",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "mBandhan",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 13,
        "name": "RBL Bank",
        "image": "img/RBL BANK.jpg",
        "interest": "3.25% - 7.80% (FD)",
        "branches": "500+",
        "atms": "400+",
        "netProfit": "₹271 Cr (Q4 FY25)",
        "car": "16.5%",
        "grossNPA": "3.12%",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "RBL MoBank",
        "rating": "CRISIL A+ / Stable"
    },
    {
        "id": 14,
        "name": "South Indian Bank",
        "image": "img/SOUTH INDIAN Bank.jpeg",
        "interest": "3.4% - 7.9% (FD)",
        "branches": "1,011+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "SIB Mirror+",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 15,
        "name": "City Union Bank",
        "image": "img/City Union Bank.jpeg",
        "interest": "4.00% - 7.25% (FD)",
        "branches": "700+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "21.17%",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "CUB All in One",
        "rating": "ICRA A+ / Stable"
    },
    {
        "id": 16,
        "name": "Karur Vysya Bank",
        "image": "img/Karur Vysya Bank.png",
        "interest": "3.75% - 7.25% (FD)",
        "branches": "800+",
        "atms": "Data not publicly disclosed",
        "netProfit": "₹513 Cr (Q4 FY25)",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "KVB DLite",
        "rating": "CRISIL A+ / Stable"
    },
    {
        "id": 17,
        "name": "Dhanlaxmi Bank",
        "image": "img/Dhanlaxmi Bank.jpeg",
        "interest": "3.00% - 7.25% (FD)",
        "branches": "Data not publicly disclosed",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "Dhanlaxmi Bank Mobile Banking",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 18,
        "name": "CSB Bank",
        "image": "img/Catholic Syrian Bank.jpeg",
        "interest": "3.00% - 7.50% (FD)",
        "branches": "Data not publicly disclosed",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "CSB Bank Mobile Banking",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 19,
        "name": "Jammu & Kashmir Bank",
        "image": "img/J&K Bank.jpeg",
        "interest": "3.50% - 7.30% (FD)",
        "branches": "1,000+",
        "atms": "Data not publicly disclosed",
        "netProfit": "₹531 Cr (Q3 FY25)",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "JK Bank Mobile Banking",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 20,
        "name": "Nainital Bank",
        "image": "img/Nainital Bank.png",
        "interest": "3.25% - 7.10% (FD)",
        "branches": "170+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "Nainital Bank Mobile Banking",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 21,
        "name": "Union Bank of India",
        "image": "img/Union Bank.jpeg",
        "interest": "3.00% - 7.15% (FD)",
        "branches": "8,500+",
        "atms": "9,000+",
        "netProfit": "₹1,100 Cr (Q4 FY25)",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "Union Bank Mobile Banking",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 22,
        "name": "Indian Bank",
        "image": "img/Indian Bank.jpeg",
        "interest": "2.80% - 7.65% (FD)",
        "branches": "6,000+",
        "atms": "Data not publicly disclosed",
        "netProfit": "₹1,200 Cr (Q4 FY25)",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "Indian Bank Mobile Banking",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 23,
        "name": "Indian Overseas Bank",
        "image": "img/Indian Overseas Bank.jpeg",
        "interest": "4.00% - 7.80% (FD)",
        "branches": "3,500+",
        "atms": "Data not publicly disclosed",
        "netProfit": "₹800 Cr (Q4 FY25)",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "IOB Mobile Banking",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 24,
        "name": "UCO Bank",
        "image": "img/UCO Bank.jpeg",
        "interest": "2.90% - 7.80% (FD)",
        "branches": "4,000+",
        "atms": "Data not publicly disclosed",
        "netProfit": "₹600 Cr (Q4 FY25)",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "UCO Bank Mobile Banking",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 25,
        "name": "Bank of Maharashtra",
        "image": "img/Bank of Maharastra.png",
        "interest": "6.50% - 7.25% (FD)",
        "branches": "2,000+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "Bank of Maharashtra Mobile Banking",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 26,
        "name": "Central Bank of India",
        "image": "img/Central Bank of India.jpeg",
        "interest": "6.25% - 7.50% (FD)",
        "branches": "4,700+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "Central Bank of India Mobile Banking",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 27,
        "name": "Punjab & Sind Bank",
        "image": "img/Punjab & Sindh Bank.jpeg",
        "interest": "6.00% - 7.25% (FD)",
        "branches": "1,500+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "Punjab & Sind Bank Mobile Banking",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 28,
        "name": "Citibank India",
        "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDQiIGhlaWdodD0iMTE4IiB2aWV3Qm94PSIwIDAgMjA0IDExOCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0wLjk0Nzc1NCA3OS45NjY4QzAuOTQ3NzU0IDU4Ljk3MzIgMTguMTA5NiA0Mi42MjkyIDQwLjQ3NjMgNDIuNjI5MkM1My40MTggNDIuNjI5MiA2NS4yMzQ0IDQ4LjQwNTkgNzEuOTg2NiA1Ny4xNDE1TDYyLjI4MDMgNjYuODYzNEM1OS43MDU3IDYzLjU2MTggNTYuNDIwOCA2MC44ODQzIDUyLjY3MDEgNTkuMDMwM0M0OC45MTkzIDU3LjE3NjMgNDQuNzk5NCA1Ni4xOTM2IDQwLjYxNjkgNTYuMTU1M0MyNy4yNTMyIDU2LjE1NTMgMTYuNTYyMiA2Ni4xNTg5IDE2LjU2MjIgNzkuOTY2OEMxNi41NjIyIDkzLjkxNTUgMjcuMjUzMiAxMDMuOTE5IDQwLjYxNjkgMTAzLjkxOUM0NC45NDkgMTAzLjkxNCA0OS4yMjE0IDEwMi45MDcgNTMuMTAxIDEwMC45NzZDNTYuOTgwNiA5OS4wNDUyIDYwLjM2MjcgOTYuMjQzMiA2Mi45ODM2IDkyLjc4ODRMNzIuNTQ5MiAxMDIuMjI4QzY2LjA3ODQgMTExLjM4NyA1My42OTkzIDExNy40NDUgNDAuNDc2MyAxMTcuNDQ1QzE4LjEwOTYgMTE3LjQ0NSAwLjk0Nzc1NCAxMDEuMTAxIDAuOTQ3NzU0IDc5Ljk2NjhaIiBmaWxsPSIjMjU1QkUzIi8+CjxwYXRoIGQ9Ik04NS4yMDk1IDQ1LjE2NTNIMTAwLjU0M1YxMTQuOTA5SDg1LjIwOTVWNDUuMTY1M1oiIGZpbGw9IiMyNTVCRTMiLz4KPHBhdGggZD0iTTEyOS4wOTkgOTYuMTY5OFY1OC4xMjc4SDExMi4zNTlWNDUuMTY1M0gxMjkuODAzVjMwLjIzMDJMMTQ0LjE1MSAyMy4xODU0VjQ1LjE2NTNIMTY2Ljk0VjU4LjEyNzhIMTQ0LjE1MVY5My42MzM3QzE0NC4xNTEgMTAwLjY3OSAxNDguMDkgMTAzLjc3OCAxNTUuNTQ1IDEwMy43NzhDMTU5LjQyNSAxMDMuNzk4IDE2My4yNjMgMTAyLjk4MSAxNjYuNzk5IDEwMS4zODNWMTE0LjYyN0MxNjIuMzY5IDExNi41NzQgMTU3LjU2OSAxMTcuNTM2IDE1Mi43MzIgMTE3LjQ0NUMxMzkuMDg3IDExNy40NDUgMTI5LjA5OSAxMDkuOTc4IDEyOS4wOTkgOTYuMTY5OFoiIGZpbGw9IiMyNTVCRTMiLz4KPHBhdGggZD0iTTE3OS4wMzcgNDUuMTY1M0gxOTQuMzdWMTE0LjkwOUgxNzkuMDM3VjQ1LjE2NTNaIiBmaWxsPSIjMjU1QkUzIi8+CjxwYXRoIGQ9Ik0xMzkuNjQ4IDAuNzgyODMyQzE1Mi4yNDEgMC43NTI3MyAxNjQuNjU3IDMuNzU4MzEgMTc1Ljg0NiA5LjU0NTc1QzE4Ny4wMzUgMTUuMzMzMiAxOTYuNjY5IDIzLjczMjUgMjAzLjkzNSAzNC4wMzQ0SDE4Ni4wN0MxODAuMjE0IDI3LjUxNTQgMTczLjA1NSAyMi4zMDI2IDE2NS4wNTggMTguNzM0M0MxNTcuMDYxIDE1LjE2NiAxNDguNDAzIDEzLjMyMjEgMTM5LjY0OCAxMy4zMjIxQzEzMC44OTMgMTMuMzIyMSAxMjIuMjM2IDE1LjE2NiAxMTQuMjM5IDE4LjczNDNDMTA2LjI0MiAyMi4zMDI2IDk5LjA4MjcgMjcuNTE1NCA5My4yMjcgMzQuMDM0NEg3NS4zNjE4QzgyLjYyNzcgMjMuNzMyNSA5Mi4yNjIxIDE1LjMzMzIgMTAzLjQ1MSA5LjU0NTc1QzExNC42NCAzLjc1ODMxIDEyNy4wNTUgMC43NTI3MyAxMzkuNjQ4IDAuNzgyODMyVjAuNzgyODMyWiIgZmlsbD0iI0ZGM0MyOCIvPgo8L3N2Zz4=",
        "interest": "6.70% - 7.05% (FD)",
        "branches": "44",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "Citibank Mobile Banking",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 29,
        "name": "Standard Chartered Bank",
        "image": "img/Standard Chartered Bank.png",
        "interest": "5.50% - 6.50% (FD)",
        "branches": "100+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "Standard Chartered Mobile Banking",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 30,
        "name": "HSBC",
        "image": "img/HSBC Bank.png",
        "interest": "5.50% - 6.00% (FD)",
        "branches": "20+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "HSBC Mobile Banking",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 31,
        "name": "Deutsche Bank",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAWlBMVEX///8AGKgAAKWOkMwAAKIAEKfj4/E8QrKKjMvm5/SXmNAAFai/weGvsdoABqaYmtDr6/VOU7YvNq6ChMjGx+TX1+w2PbD39/wAAJrd3e9kaL0TH6lobL4/RbLSSfHtAAABCElEQVRIieXX2Q6CMBCF4aG02iqbiOLG+7+mF3Yg6UJnmpi4nPsvKfZPQKh0mTFdgZYiY1JDKYqMifKvoCROOVAOZkNZd1YONEDb1oWbH4CjwXU82ONFXK4seMRAZM066iCxlRvrGUexf7l9wftxDg0e9MSCLR5UtsCBJ3TNAVjwruwDipEFH/NNDMCB9XwTR+BAI+1NqB5YsFd4UMOCbmpU6KVGhHNq6g4s6KdGg4HUSDCUGgmGUqPAJbXKc2swnFoaRlJLw0hqSRhLLQWjqSXgkloRdjEYT20d7vCjx09tFY56Zxd1H/1+fBvsiHByoDpPW8om29XyZaWI8yBv3wWzP+Zz/z48AfRxFoAaXr04AAAAAElFTkSuQmCC",
        "interest": "5.25% - 6.00% (FD)",
        "branches": "25+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "Deutsche Bank Mobile Banking",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 32,
        "name": "Barclays Bank",
        "image": "img/BARCLAYS Bank.png",
        "interest": "5.50% - 6.00% (FD)",
        "branches": "15+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "Barclays Mobile Banking",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 33,
        "name": "BNP Paribas",
        "image": "https://cdn.cookielaw.org/logos/716f7201-def5-41ba-bb74-b0904c984cda/09bfac7a-dbc5-4e3a-8971-1191bbc61152/4cfe59b4-ea7f-4b6b-8b3a-39b1b15aed58/logo-bnpparibas.png",
        "interest": "5.25% - 6.00% (FD)",
        "branches": "10+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "BNP Paribas Mobile Banking",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 34,
        "name": "Bank of America",
        "image": "https://www1.bac-assets.com/homepage/spa-assets/images/assets-images-global-logos-bac-logo-v2-CSX3648cbbb.svg",
        "interest": "5.00% - 5.75% (FD)",
        "branches": "5+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "Bank of America Mobile Banking",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 35,
        "name": "DBS Bank India",
        "image": "https://www.dbs.com/in/iwov-resources/flp/splitter/images/dbs_logo.svg",
        "interest": "5.50% - 6.50% (FD)",
        "branches": "30+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "High",
        "app": "DBS iBanking",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 36,
        "name": "United Overseas Bank (UOB)",
        "image": "https://www.uobgroup.com/assets/iwov-resources/assets/BrandAssets/UOB_Logo.svg",
        "interest": "5.25% - 6.25% (FD)",
        "branches": "15+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Moderate",
        "app": "UOB Mighty",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 37,
        "name": "Shinhan Bank",
        "image": "https://www.shinhanbankindia.com/assets/images/logo.png",
        "interest": "5.00% - 6.00% (FD)",
        "branches": "50+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "High",
        "app": "Shinhan Bank Mobile",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 38,
        "name": "Mizuho Bank",
        "image": "data:image/png;base64,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",
        "interest": "5.00% - 6.00% (FD)",
        "branches": "40+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Moderate",
        "app": "Mizuho Bank Mobile",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 39,
        "name": "Credit Suisse AG",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAI0AjQMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABgcIAQMFAgT/xAA+EAABAwIDBgMEBwUJAAAAAAABAAIDBAUGETEHEiFBUWETgZEUIjJxFSMzQmKhwSRTcpLRFjRDRFWCk7HS/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABcRAQEBAQAAAAAAAAAAAAAAAAABESH/2gAMAwEAAhEDEQA/ALxREQEREBERAREQEREBERAREQEREBERAREQEREBERAREHFAREQEREBERAREQEREBERBFhji20t8kst8DrXW731BqD9VUNz4OY/Tj0ORz4KUNIcAQcwdCFH8bYUocW2h1HWANmZm6mnAzMT+vcHQjmqWs2JcTYFuEtrkc4tpnbklBUEujPQxnUNI0I4dkGikURwrtBsuIS2DxDR1x4ezVBALz+A6O/77KW5oOVBr5jWbCWI20uIoC60Vx3qOugYT4RA95kg55a5jkdOBU5UfxxhyLFGHai3u3Wz/AGlNIf8ADlGh+WoPYlB7VJUw1lPHUUssc0EjQ5kkbg5rh1BGq7lmzCOKLzhGpc2maTAHkVFvlOTd7PI5a7rgeY881e2FcVWvE9GZrdLlKz7amkyEkR7jp3HAq4PdREUBERAREQEREBERAyzUE2pYRN9tn0jb4d66Ubc2ho4zx6lnz1I78OanaFBlRoZOwOHEHiFNcK7R7vY/Dp7jvXKgHD33fXRjs773yPqFxtSw4LFfxWU0e5Q3Fxe0DRk2rm+fxeqiI4haGkMP4htmIaT2i11TZmj42Hg+M9HN1C9TgVl6kqKq31bKu31ElNUM+GSJ2R+R6jsVauD9qUNSWUeJQymqDkG1TG5RP/iH3T30+SmCL7WbKLXio1sTMqe5M8ThoJRwePMbp8yolR1FXbqyKut1Q+nqY+LZIz+RHMdjwVz7XLay5YS9tj959FK2djmnPNh913lk7PyVLD4QrBdWA9oVPiHdoLkGUl1A4Mz9yfuzv1br0zU5BWWXs4hzSWuaQ5rmnIgjQg8irU2fbR/HfDaMRy5TuIZT1jtJDya88nd9D89ZYLTRcA5rlQEREBERAREQEREHh4ysTMR4eqred0TObvwPP3JRxaf0PYlZ1bvNLmSNLHscWva7VrgciD5rUyoravZhasVGriaRT3JvijIcGyDIPHnwPmVqCILgtDuC5RaR7VjxNXWmhntb3tmtdRG6KSnmzLY2uGRc3pl007L8t/slfh6rFNcot3e+ylbxZKOrT+moXmy/A75LRVPQ0WIcK0cNygZUQVFLG5zXcjujiDqD3CzeKzvmCviWMSNLXAEHUFS3GuBK7DJfV0ZfWWnPPxAM5IB+PLVv4vXqYo1wcMxoqLF2b7QXUr4bHiKcmJ2TKStkPw9I5Cfyd5FW+CssSxtkYWuaC08CDzVmbMcevikisF/mzacm0VXI7yEbz16Hnoe+bBbiLgLlQEREBERAREQFDdq1o+k8IVEzATPQftTMhmSGg7w/lz9ApkviaNksT45GhzHgtcDzB1QZdYQ5oI5rld9zoH2q711tk1pZ3Rt7tz90+bciuhdEcP8AgK0PgSTxMHWdx19kYPQZLPJ4he1RYuxFQUMVFRXSSKniGUbAxnujpmQs2K0Q8BzS0jMEZEEKqMdbNSx0lzwxHwJLpre0a94+n8OnToYj/bbFf+uT/wAjP/K74cf4riOf0oX9nwsP6KZRGWuJzBBBByIIyIPQjkVxKwOaR1XuvulFfLy2oxKPZ2yjdlqqGINdvcnPbxDuhIGenRSqo2UTTwtqLNe6eohkbvR+LHkHDrvNJz9Foetstxubk1tjvMudfG39nmcf7w0cj+ID1HHqrKWeblgPF1tkbNHbpHvhcHsqKKRry1w4ggZh35K29n+KZMRW50NxgkpbtSANqoZInR59HgEaHI/IrNErREUBERAREQEREFHbYaEUWL46poybX04d/uZ7rvy3FC99o1K0TiXCtpxM6lN2hkk9lLjHuSuZ8WWYOXLgF+alwFhaly8Ox0jiPvSt8Q+rs1rRn0zRjV4818+1Q/vG+q0xDYrPAMobVRMHanb/AEXf9G0A/wAjTf8AC3+iaMxCaN3wvB819b7StMPs9skGT7dRuz6wNP6Lz6nBuGqn7axW9x6iBoPqE0Z3IBHJSfA2NajCtS2nqt+e0SO9+McXQk/eZ+o5/PWy6rZjhafMx0UtOT+5qHgehJC8C4bHYHA/R15nZ0bUxNeB5t3U0WXQ1dPX0sVVRysmp5mh0cjDmHBd2SrHBeH8ZYMuQpXR01wslRIA9sE+ToCT9oGuAy7gE58uOtnrIIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIP//Z",
        "interest": "Data not publicly disclosed",
        "branches": "Data not publicly disclosed",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "Credit Suisse Mobile Banking",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 40,
        "name": "Sberbank",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/af/Sberbank_logo_2020_en.png",
        "interest": "5.25% - 6.50% (FD)",
        "branches": "100+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "High",
        "app": "Sberbank Online",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 41,
        "name": "UBS AG",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAUCAMAAADvNg5hAAAAnFBMVEX////lAAAAAAD1vLz4zMw4ODj4+PjwiIjBwcHnFBRBQUF4eHjJycloaGjw8PAuLi4lJSXoLS3/9vbS0tJtbW20tLS7u7vpICDqNDT2trb+7+/sWFjwfX1GRkb85eWFhYVfX1/pRET4xMSQkJCpqakMDAz0nZ373d2YmJigoKDucXHqPT3xkJBUVFT1p6fuYWHsUFDj4+MaGhruaWnGhuhjAAABzUlEQVQ4jZ2S65KiMBCFuxvDIJeAIKIMyFUUBi/g+7/bJsFFZ7e2ap3+kXQ1fMnp0wFQoYPhwE/CMc31j8A6p/8Hj/tpD4XIzQM0zqrkR4gYXQCuS4wWxRJxFeF2Jz/Fn3hbYSLTgZncSlMJVmQ8Tu0R1b6IxFJiIe5BFCf5S5FCg+JSnhGNhjRHz4nYMIEfr6AmQUhk6YKlLC+PAnQr5lFtrzmZB/O8+SfYyFKCSnBynLQ6nLkuGRt2+m3ADK5m8I6damHxtCnkAK5sr+V/gdsJ9OMGO191irc+frL5gSh4sfwPEIstdkreDmU0IrOtLDhTZq9tGsPaafXv4JcCpeDrNIT4Q85Kg9ALKnIJbAeyw2G0rfQ7WEygULmf27sgfgGz6pa8QCfaiMGwITPtV1C7zaC/EgobpbcUXz19zXSXc8sNIQ9PFLT141Bf7k03g3EkXsB9ej4YQW4OjDODRIhmqzAk9QT26p0ArHYzKCyKISkmhxrIxyoba5PbOZgbd22n3mSuGPdloW0/ZZ89Lku1yDl2+7jEqyjr9SmAtE0pswy9Pc0z2fe3baeJxO8bFeXkVn+/JeVzjGEw2OMAbwdPc2aG73Mi6lR/6/9fKcokPhMe5FYAAAAASUVORK5CYII=",
        "interest": "Data not publicly disclosed",
        "branches": "Data not publicly disclosed",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Data not publicly disclosed",
        "app": "UBS Mobile Banking",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 42,
        "name": "FirstRand Bank",
        "image": "https://assets.rmb.co.za/images/fri-logo.png",
        "interest": "5.00% - 6.25% (FD)",
        "branches": "150+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "High",
        "app": "FirstRand Mobile Banking",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 43,
        "name": "Commonwealth Bank of Australia",
        "image": "data:image/webp;base64,UklGRugBAABXRUJQVlA4WAoAAAAQAAAAGgAAGgAAQUxQSDEBAAARkCRJkiJJbjFfWWZmZma6ruybh5mZ9gHuh8zqN0TEBABItHq2+AAkJFESEqKay3Oev4boC4FodWLG9vxZRpcAXZiK7UxfLKqRBAh0YSJ2nExfpitJtGfn3SbJ3LkqCujoypTbtJ66WlUFAnR20m1aJ5NnKZrS+UUPJ3Eyf66K9sqEE9uxE8dxJq93zs7bTjxi7Kzcg7o8m9geiGPHydH3sWcTiQcTx7bT/v835SSj2M7g8f25OIkd23ES9w7/jl2fa9JkVB98qtLJ6U634yS7j1HBpYle0kuy/QYo4Nx8xxk+flkg2lPjTezG2X5OFUBVcWUybjvb74rhgjNzttPdf1xoiILz4+lvviwKQEC1XJju7D5nREGH0wtJDh6DQCBGvrWUw080otUIxd3FP4XoCwBWUDggkAAAAPAEAJ0BKhsAGwA+fR6fT6ShJKSb8JAPiWIAnTKDx07SsFyyGISz8MRoeQq0PdiEAAD+9g0JL2t3/33w//eLI/+++H2NvF1+rfxfbGSZUNqRgItvrccFMHmP0nzJ4tcxyKCE3NhPrmOyiwNAwOslxP7j3ZxMj6eRXNjtkur2XAC0xC2ycnZIjsvwEmYrFgAAAA==",
        "interest": "5.25% - 6.50% (FD)",
        "branches": "400+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "High",
        "app": "CommBank App",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 44,
        "name": "AU Small Finance Bank",
        "image": "img/AU Small Finance Bank.jpeg",
        "interest": "6.00% - 7.00% (FD)",
        "branches": "250+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Moderate",
        "app": "AU Small Finance Bank Mobile",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 45,
        "name": "Equitas Small Finance Bank",
        "image": "img/Equitas Small Finance Bank.jpg",
        "interest": "6.00% - 7.25% (FD)",
        "branches": "200+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Moderate",
        "app": "Equitas Small Finance Bank Mobile",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 46,
        "name": "Ujjivan Small Finance Bank",
        "image": "img/Ujjivan Small Finanace Bank.png",
        "interest": "6.00% - 7.00% (FD)",
        "branches": "300+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Moderate",
        "app": "Ujjivan SFB Mobile",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 47,
        "name": "Jana Small Finance Bank",
        "image": "img/JANA small Finanace Bank.png",
        "interest": "6.00% - 7.25% (FD)",
        "branches": "150+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Moderate",
        "app": "Jana SFB Mobile",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 48,
        "name": "Suryoday Small Finance Bank",
        "image": "img/Suryoday Bank.png",
        "interest": "6.00% - 7.00% (FD)",
        "branches": "100+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Moderate",
        "app": "Suryoday SFB Mobile",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 49,
        "name": "Utkarsh Small Finance Bank",
        "image": "img/Utkarsh Small Finanace Bank.jpeg",
        "interest": "6.00% - 7.00% (FD)",
        "branches": "250+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Moderate",
        "app": "Utkarsh Small Finance Bank Mobile",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 50,
        "name": "ESAF Small Finance Bank",
        "image": "img/EASF small finanace Bank.jpeg",
        "interest": "6.00% - 7.00% (FD)",
        "branches": "300+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Moderate",
        "app": "ESAF SFB Mobile",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 51,
        "name": "Fincare Small Finance Bank",
        "image": "img/Fincare Small Finance Bank.jpeg",
        "interest": "6.00% - 7.00% (FD)",
        "branches": "150+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Moderate",
        "app": "Fincare SFB Mobile",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 52,
        "name": "North East Small Finance Bank",
        "image": "img/North East Small Finanace Bank.png",
        "interest": "6.00% - 7.00% (FD)",
        "branches": "75+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Moderate",
        "app": "North East SFB Mobile",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 53,
        "name": "Shivalik Small Finance Bank",
        "image": "img/Shivalik Small Finanace Bank.png",
        "interest": "6.00% - 7.00% (FD)",
        "branches": "50+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Moderate",
        "app": "Shivalik SFB Mobile",
        "rating": "Data not publicly disclosed"
    },
    {
        "id": 54,
        "name": "Unity Small Finance Bank",
        "image": "img/UNITY small finanace bank.jpeg",
        "interest": "6.00% - 7.00% (FD)",
        "branches": "100+",
        "atms": "Data not publicly disclosed",
        "netProfit": "Data not publicly disclosed",
        "car": "Data not publicly disclosed",
        "grossNPA": "Data not publicly disclosed",
        "digitalAdoption": "Moderate",
        "app": "Unity SFB Mobile",
        "rating": "Data not publicly disclosed"
    }

];





const banksContainer = document.getElementById('banks');
const searchBar = document.getElementById('searchBar');
let selectedBanks = [];
let comparePhase = 1;

function renderBanks(filteredBanks = banksData) {
    banksContainer.innerHTML = '';
    filteredBanks.forEach(bank => {
        const box = document.createElement('div');
        box.className = 'bank-box';
        box.dataset.id = bank.id;
        box.innerHTML = `
                    <img src="${bank.image}" alt="${bank.name}">
                    <p>${bank.name}</p>
                `;
        box.addEventListener('click', () => toggleBankSelection(bank.id, box));
        banksContainer.appendChild(box);
    });
}

function toggleBankSelection(id, box) {
    if (comparePhase !== 2) return;

    const index = selectedBanks.indexOf(id);
    if (index > -1) {
        selectedBanks.splice(index, 1);
        box.classList.remove('selected');
    } else if (selectedBanks.length < 2) {
        selectedBanks.push(id);
        box.classList.add('selected');
    }
}

document.getElementById('compareBtn').addEventListener('click', () => {
    if (comparePhase === 1) {
        comparePhase = 2;
        alert('Now select 2 banks to compare.');
    } else if (comparePhase === 2 && selectedBanks.length === 2) {
        showComparisonDialog();
    } else {
        alert('Please select exactly 2 banks.');
    }
});

function showComparisonDialog() {
    const bank1 = banksData.find(b => b.id === selectedBanks[0]);
    const bank2 = banksData.find(b => b.id === selectedBanks[1]);

    const content = `
                <table border="1" cellpadding="10" style="margin: auto;">
                    <tr><th>Parameter</th><th>${bank1.name}</th><th>${bank2.name}</th></tr>
                    <tr><td>Interest Rate</td><td>${bank1.interest}</td><td>${bank2.interest}</td></tr>
                    <tr><td>Branches</td><td>${bank1.branches}</td><td>${bank2.branches}</td></tr>
                    <tr><td>ATM's</td><td>${bank1.atms}</td><td>${bank2.atms}</td></tr>
                    <tr><td>Net Profit</td><td>${bank1.netProfit}</td><td>${bank2.netProfit}</td></tr>
                    <tr><td>CAR</td><td>${bank1.car}</td><td>${bank2.car}</td></tr>
                    <tr><td>Gross NPA</td><td>${bank1.grossNPA}</td><td>${bank2.grossNPA}</td></tr>
                    <tr><td>Digital Adoption</td><td>${bank1.digitalAdoption}</td><td>${bank2.digitalAdoption}</td></tr>
                    <tr><td>Mobile App</td><td>${bank1.app}</td><td>${bank2.app}</td></tr>
                    <tr><td>Credit Rating</td><td>${bank1.rating}</td><td>${bank2.rating}</td></tr>
                </table>
            `;

    document.getElementById('comparisonContent').innerHTML = content;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('dialog').style.display = 'block';
}

function closeDialog() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('dialog').style.display = 'none';
    resetSelection();
}

function resetSelection() {
    comparePhase = 1;
    selectedBanks = [];
    document.querySelectorAll('.bank-box').forEach(box => box.classList.remove('selected'));
}

searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    const filtered = banksData.filter(bank => bank.name.toLowerCase().includes(query));
    renderBanks(filtered);
});

renderBanks();