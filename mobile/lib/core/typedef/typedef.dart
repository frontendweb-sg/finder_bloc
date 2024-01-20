import 'package:dartz/dartz.dart';
import 'package:mobile/core/errors/failure.dart';

typedef FutureResult<T> = Future<Either<Failure, T>>;
typedef FutureResultVoid = Future<Either<Failure, void>>;
