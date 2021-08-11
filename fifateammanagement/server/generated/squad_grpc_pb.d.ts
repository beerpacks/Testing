// package: 
// file: squad.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as squad_pb from "./squad_pb";

interface ISquadServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getSquad: ISquadServiceService_IGetSquad;
    addPlayer: ISquadServiceService_IAddPlayer;
}

interface ISquadServiceService_IGetSquad extends grpc.MethodDefinition<squad_pb.SquadBaseRequest, squad_pb.SquadPlayerList> {
    path: "/SquadService/GetSquad";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<squad_pb.SquadBaseRequest>;
    requestDeserialize: grpc.deserialize<squad_pb.SquadBaseRequest>;
    responseSerialize: grpc.serialize<squad_pb.SquadPlayerList>;
    responseDeserialize: grpc.deserialize<squad_pb.SquadPlayerList>;
}
interface ISquadServiceService_IAddPlayer extends grpc.MethodDefinition<squad_pb.AddPlayerRequest, squad_pb.SquadBaseResponse> {
    path: "/SquadService/AddPlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<squad_pb.AddPlayerRequest>;
    requestDeserialize: grpc.deserialize<squad_pb.AddPlayerRequest>;
    responseSerialize: grpc.serialize<squad_pb.SquadBaseResponse>;
    responseDeserialize: grpc.deserialize<squad_pb.SquadBaseResponse>;
}

export const SquadServiceService: ISquadServiceService;

export interface ISquadServiceServer {
    getSquad: grpc.handleUnaryCall<squad_pb.SquadBaseRequest, squad_pb.SquadPlayerList>;
    addPlayer: grpc.handleUnaryCall<squad_pb.AddPlayerRequest, squad_pb.SquadBaseResponse>;
}

export interface ISquadServiceClient {
    getSquad(request: squad_pb.SquadBaseRequest, callback: (error: grpc.ServiceError | null, response: squad_pb.SquadPlayerList) => void): grpc.ClientUnaryCall;
    getSquad(request: squad_pb.SquadBaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: squad_pb.SquadPlayerList) => void): grpc.ClientUnaryCall;
    getSquad(request: squad_pb.SquadBaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: squad_pb.SquadPlayerList) => void): grpc.ClientUnaryCall;
    addPlayer(request: squad_pb.AddPlayerRequest, callback: (error: grpc.ServiceError | null, response: squad_pb.SquadBaseResponse) => void): grpc.ClientUnaryCall;
    addPlayer(request: squad_pb.AddPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: squad_pb.SquadBaseResponse) => void): grpc.ClientUnaryCall;
    addPlayer(request: squad_pb.AddPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: squad_pb.SquadBaseResponse) => void): grpc.ClientUnaryCall;
}

export class SquadServiceClient extends grpc.Client implements ISquadServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getSquad(request: squad_pb.SquadBaseRequest, callback: (error: grpc.ServiceError | null, response: squad_pb.SquadPlayerList) => void): grpc.ClientUnaryCall;
    public getSquad(request: squad_pb.SquadBaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: squad_pb.SquadPlayerList) => void): grpc.ClientUnaryCall;
    public getSquad(request: squad_pb.SquadBaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: squad_pb.SquadPlayerList) => void): grpc.ClientUnaryCall;
    public addPlayer(request: squad_pb.AddPlayerRequest, callback: (error: grpc.ServiceError | null, response: squad_pb.SquadBaseResponse) => void): grpc.ClientUnaryCall;
    public addPlayer(request: squad_pb.AddPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: squad_pb.SquadBaseResponse) => void): grpc.ClientUnaryCall;
    public addPlayer(request: squad_pb.AddPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: squad_pb.SquadBaseResponse) => void): grpc.ClientUnaryCall;
}
