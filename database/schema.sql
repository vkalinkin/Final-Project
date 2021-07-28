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



CREATE TABLE "games" (
	"gameID" integer NOT NULL,
	"targetPrice" integer NOT NULL,
	"salePrice" integer NOT NULL,
	"dealID" TEXT NOT NULL,
	"userID" integer NOT NULL,
	CONSTRAINT "games_pk" PRIMARY KEY ("dealID")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "games" ADD CONSTRAINT "games_fk0" FOREIGN KEY ("userID") REFERENCES "users"("userID");
