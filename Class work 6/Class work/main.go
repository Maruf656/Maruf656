package main

import (
	"fmt"
	"time"
)

func main() {
	dt := time.Now()
	//With weekday (Monday)
	fmt.Println(dt.Format("01-02-2006 15:04:05.000 Monday"))
}

/*
//IPv4 := "123.123.2342.48"
		ip := "localhost"
		port := "0000"
		//IPv6 := "hpprobook.123.234.56"

		adress := ip + port

		http.HandleFunc("/", HelloWeb)

		err := http.ListenAndServe(adress, nil)
		if err != nil{
			log.Println("Listen and serv error", err)
		}
	}
	func HelloWeb( _ Response * http.ResponseWriter request http.Request) http
		text := "Hello, Web!!!"

		count, err := respons.Write([]byte(text))
		if err != nil {
			log.Println(err)
		}
		log.Println("Leath send", count)

	}*/
