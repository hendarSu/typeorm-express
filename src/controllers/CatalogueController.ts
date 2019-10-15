import { Request, Response } from "express-serve-static-core";
import { find } from 'lodash';
import { BaseResponseVm } from "../model/base-response-vm";

export default class CatalogueController {
    constructor() { }

    public static listAll = async (req: Request, res: Response) => {
        const response = new BaseResponseVm();
        const catalogue = [
            {
                CITEM_ID: '1',
                CITEM_DESC: 'lorem ipsum amit-amit',
                CITEM_FUNGSI: 'untuk apa saja',
                CITEM_MATNUM : 'lorem',
                CITEM_OBSOLETE: 'lorem',
                CITEM_PN: '02222',
                TEMP_PABRIK: 'XIOMI',
                PRICE: 100
            },
            {
                CITEM_ID: '2',
                CITEM_DESC: 'lorem ipsum amit-amit 2',
                CITEM_FUNGSI: 'untuk apa saja',
                CITEM_MATNUM : 'lorem',
                CITEM_OBSOLETE: 'lorem',
                CITEM_PN: '02222',
                TEMP_PABRIK: 'XIOMI',
                PRICE: 100
            },
            {
                CITEM_ID: '3',
                CITEM_DESC: 'lorem ipsum amit-amit 3',
                CITEM_FUNGSI: 'untuk apa saja',
                CITEM_MATNUM : 'lorem',
                CITEM_OBSOLETE: 'lorem',
                CITEM_PN: '02222',
                TEMP_PABRIK: 'XIOMI',
                PRICE: 100
            },
            {
                CITEM_ID: '4',
                CITEM_DESC: 'lorem ipsum amit-amit 4',
                CITEM_FUNGSI: 'untuk apa saja',
                CITEM_MATNUM : 'lorem',
                CITEM_OBSOLETE: 'lorem',
                CITEM_PN: '02222',
                TEMP_PABRIK: 'XIOMI',
                PRICE: 100
            },
        ]
        response.data = catalogue;
        res.send(response);
    };

    static getOneById = async (req: Request, res: Response) => {
        //Get the ID from the url
        const response = new BaseResponseVm();
        const id: string = req.params.id;
        const catalogue = [
            {
                CITEM_ID: '1',
                CITEM_DESC: 'lorem ipsum amit-amit',
                CITEM_FUNGSI: 'untuk apa saja',
                CITEM_MATNUM : 'lorem',
                CITEM_OBSOLETE: 'lorem',
                CITEM_PN: '02222',
                TEMP_PABRIK: 'XIOMI',
                PRICE: 100
            },
            {
                CITEM_ID: '2',
                CITEM_DESC: 'lorem ipsum amit-amit 2',
                CITEM_FUNGSI: 'untuk apa saja',
                CITEM_MATNUM : 'lorem',
                CITEM_OBSOLETE: 'lorem',
                CITEM_PN: '02222',
                TEMP_PABRIK: 'XIOMI',
                PRICE: 100
            },
            {
                CITEM_ID: '3',
                CITEM_DESC: 'lorem ipsum amit-amit 3',
                CITEM_FUNGSI: 'untuk apa saja',
                CITEM_MATNUM : 'lorem',
                CITEM_OBSOLETE: 'lorem',
                CITEM_PN: '02222',
                TEMP_PABRIK: 'XIOMI',
                PRICE: 100
            },
            {
                CITEM_ID: '4',
                CITEM_DESC: 'lorem ipsum amit-amit 4',
                CITEM_FUNGSI: 'untuk apa saja',
                CITEM_MATNUM : 'lorem',
                CITEM_OBSOLETE: 'lorem',
                CITEM_PN: '02222',
                TEMP_PABRIK: 'XIOMI',
                PRICE: 100
            },
        ];

        const itemDetail = find(catalogue, ['CITEM_ID', id]);
        response.data = itemDetail;
        res.send(response);
    };
}