import 'package:dartz/dartz.dart';
import 'package:mobile/core/errors/failure.dart';

typedef FutureResult<T> = Future<Either<Failure, T>>;
typedef FutureResultVoid = FutureResult<void>;
typedef MapData = Map<String, dynamic>;
