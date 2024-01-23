import 'package:flutter/material.dart';
import 'package:mobile/config/theme/colors.dart';

Text textHeadlineLarge(
  BuildContext context, {
  required String label,
  Color? color = AppColor.colorBody,
  FontWeight? fontWeight = FontWeight.w700,
  bool? softWrap,
  TextAlign? textAlign = TextAlign.left,
  Key? key,
}) {
  return Text(
    key: Key('text-${key ?? label}'),
    label,
    style: Theme.of(context).textTheme.headlineLarge!.copyWith(
          color: color,
          fontWeight: fontWeight,
        ),
    softWrap: softWrap,
    textAlign: textAlign,
  );
}

Text textBodyLarge(
  BuildContext context, {
  required String label,
  Color? color = AppColor.colorBody,
  FontWeight? fontWeight = FontWeight.w700,
  bool? softWrap,
  TextAlign? textAlign = TextAlign.left,
  Key? key,
}) {
  return Text(
    key: Key('text-${key ?? label}'),
    label,
    style: Theme.of(context).textTheme.bodyLarge!.copyWith(
          color: color,
          fontWeight: fontWeight,
        ),
    softWrap: softWrap,
    textAlign: textAlign,
  );
}

Text textBodyMedium(
  BuildContext context, {
  required String label,
  Color? color = AppColor.colorBody,
  FontWeight? fontWeight = FontWeight.normal,
  bool? softWrap,
  TextAlign? textAlign = TextAlign.left,
  Key? key,
}) {
  return Text(
    key: Key('text-${key ?? label}'),
    label,
    style: Theme.of(context).textTheme.bodyMedium!.copyWith(
          color: color,
          fontWeight: fontWeight,
        ),
    softWrap: softWrap,
    textAlign: textAlign,
  );
}

Text textBodySmall(
  BuildContext context, {
  required String label,
  Color? color = AppColor.colorBody,
  FontWeight? fontWeight = FontWeight.w700,
  bool? softWrap,
  TextAlign? textAlign = TextAlign.left,
  Key? key,
}) {
  return Text(
    key: Key('text-${key ?? label}'),
    label,
    style: Theme.of(context).textTheme.bodySmall!.copyWith(
          color: color,
          fontWeight: fontWeight,
        ),
    softWrap: softWrap,
    textAlign: textAlign,
  );
}
