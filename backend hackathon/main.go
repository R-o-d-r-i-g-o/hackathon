package main

import (
	"fmt"
	config "transaction/configs"
	"transaction/db"

	routers "transaction/routers"
	"transaction/server"
)

func main() {
	config.Load()
	db.StartDatabase()
	createdServer := server.CreateServer()
	routers.Avaiable(createdServer.GetServerEngine())
	createdServer.GetServerEngine().Run(fmt.Sprintf("%s:%s", config.Server.HOST, config.Server.PORT))
}
