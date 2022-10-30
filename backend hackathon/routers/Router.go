package routes

import (
	"transaction/module/routes"

	"github.com/gin-gonic/gin"
)

func Avaiable(r *gin.Engine) {
	user := r.Group("/user")
	routes.UserRoutes(user)
}
