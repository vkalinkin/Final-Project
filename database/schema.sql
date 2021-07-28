set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "users" (
	"userID" serial NOT NULL,
	"email" TEXT NOT NULL,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "favorites" (
	"gameID" integer NOT NULL,
	"userID" integer NOT NULL,
	"currentPrice" integer NOT NULL,
	"dealID" TEXT NOT NULL,
	"gameTitle" TEXT NOT NULL,
	"storeID" integer NOT NULL,
	"gameImage" TEXT NOT NULL,
	"favoriteID" serial NOT NULL,
	CONSTRAINT "favorites_pk" PRIMARY KEY ("favoriteID")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "favorites" ADD CONSTRAINT "favorites_fk0" FOREIGN KEY ("userID") REFERENCES "users"("userID");
