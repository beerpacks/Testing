// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var squad_pb = require('./squad_pb.js');

function serialize_AddPlayerRequest(arg) {
  if (!(arg instanceof squad_pb.AddPlayerRequest)) {
    throw new Error('Expected argument of type AddPlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AddPlayerRequest(buffer_arg) {
  return squad_pb.AddPlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SquadBaseRequest(arg) {
  if (!(arg instanceof squad_pb.SquadBaseRequest)) {
    throw new Error('Expected argument of type SquadBaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SquadBaseRequest(buffer_arg) {
  return squad_pb.SquadBaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SquadBaseResponse(arg) {
  if (!(arg instanceof squad_pb.SquadBaseResponse)) {
    throw new Error('Expected argument of type SquadBaseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SquadBaseResponse(buffer_arg) {
  return squad_pb.SquadBaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SquadPlayerList(arg) {
  if (!(arg instanceof squad_pb.SquadPlayerList)) {
    throw new Error('Expected argument of type SquadPlayerList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SquadPlayerList(buffer_arg) {
  return squad_pb.SquadPlayerList.deserializeBinary(new Uint8Array(buffer_arg));
}


var SquadServiceService = exports.SquadServiceService = {
  getSquad: {
    path: '/SquadService/GetSquad',
    requestStream: false,
    responseStream: false,
    requestType: squad_pb.SquadBaseRequest,
    responseType: squad_pb.SquadPlayerList,
    requestSerialize: serialize_SquadBaseRequest,
    requestDeserialize: deserialize_SquadBaseRequest,
    responseSerialize: serialize_SquadPlayerList,
    responseDeserialize: deserialize_SquadPlayerList,
  },
  addPlayer: {
    path: '/SquadService/AddPlayer',
    requestStream: false,
    responseStream: false,
    requestType: squad_pb.AddPlayerRequest,
    responseType: squad_pb.SquadBaseResponse,
    requestSerialize: serialize_AddPlayerRequest,
    requestDeserialize: deserialize_AddPlayerRequest,
    responseSerialize: serialize_SquadBaseResponse,
    responseDeserialize: deserialize_SquadBaseResponse,
  },
};

exports.SquadServiceClient = grpc.makeGenericClientConstructor(SquadServiceService);
