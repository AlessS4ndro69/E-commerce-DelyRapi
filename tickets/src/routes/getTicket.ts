import express, { NextFunction, Request, Response } from "express";
import { NotFoundError } from "@microservices-node-react/common";
//import mongoose from "mongoose";

const router = express.Router();

import { Ticket } from "../models/Ticket";

router.get(
    "/api/tickets/:id",
    async (req: Request, res: Response, next: NextFunction) => {
        const ticketId = req.params.id;

        //if (!mongoose.Types.ObjectId.isValid(ticketId)) {
        //    return next(new NotFoundError()); // opcionalmente usar BadRequestError
        //}
        console.log("a llegado al api de tickets para obteener ticked por idddd");
        const ticket = await Ticket.findById(ticketId);
        //const ticket = await Ticket.findOne({ where: { id: ticketId } });
        console.log("ticket is:", ticket);

        if (!ticket) {
            return next(new NotFoundError());
        }

        res.status(200).send(ticket);
    }
);

export { router as getTicketRouter };
