const express = require('express')
const Router = express.Router();

const {transactionController} = require('../controller')
const upload = require('./../middleware/upload')
const jwtVerify = require('./../middleware/decrypt')

Router.post('/booked', jwtVerify, transactionController.transaction)
Router.get('/rates', transactionController.event)
Router.post('/data', jwtVerify,transactionController.dataTransaction)
Router.post('/tenant-data', transactionController.tenantDataTransaction)
Router.patch('/payment-proof', upload, transactionController.paymentProof)
Router.post('/order-list', jwtVerify, transactionController.orderList)
Router.get('/status', transactionController.getAllStatus)
Router.post('/filter', jwtVerify, transactionController.getOrderListFilter)
Router.patch('/cancel', transactionController.cancelOrder)
Router.post('/tenant-orderList', jwtVerify, transactionController.tenantOrderList)
Router.post('/confirmation', transactionController.acceptRejectOrder)


module.exports = Router;