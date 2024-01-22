import 'package:mobile/core/utils/typedef.dart';

abstract class UseCase<Type, Params> {
  FutureResult<Type> call(Params params);
}
